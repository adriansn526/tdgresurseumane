'use client'

import { useEffect, useState } from 'react'
import { posthog } from '@/lib/posthog'

export type ExperimentVariant = 'control' | 'test' | 'loading'

/**
 * Hook pentru A/B testing cu PostHog
 * @param experimentKey - Numele experimentului din PostHog
 * @returns Varianta curentă (control, test, sau loading)
 */
export function usePostHogExperiment(experimentKey: string): ExperimentVariant {
  const [variant, setVariant] = useState<ExperimentVariant>('loading')

  useEffect(() => {
    // Așteaptă ca PostHog să fie inițializat
    const checkFeatureFlag = () => {
      if (typeof window !== 'undefined' && posthog) {
        // Obține varianta din feature flag
        const flagValue = posthog.getFeatureFlag(experimentKey)
        
        if (flagValue === 'test') {
          setVariant('test')
        } else {
          setVariant('control')
        }

        // Track experiment exposure
        posthog.capture('$experiment_started', {
          experiment: experimentKey,
          variant: flagValue || 'control'
        })
      }
    }

    // Verifică imediat
    checkFeatureFlag()

    // Reîncearcă după un delay mic dacă PostHog nu e încă gata
    const timeout = setTimeout(checkFeatureFlag, 1000)

    return () => clearTimeout(timeout)
  }, [experimentKey])

  return variant
}

/**
 * Hook pentru tracking evenimente în A/B test
 */
export function usePostHogTracking() {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && posthog) {
      posthog.capture(eventName, properties)
    }
  }

  const trackConversion = (conversionType: string, value?: number) => {
    trackEvent('conversion', {
      type: conversionType,
      value: value || 1
    })
  }

  return { trackEvent, trackConversion }
}
