# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://tdgtrading.ro
NEXT_PUBLIC_WORDPRESS_API_URL=https://cms.tdgtrading.ro/wp-json/wp/v2

# WordPress Configuration (Backend)
WORDPRESS_SITE_URL=https://cms.tdgtrading.ro

# Optional: Revalidation Secret (for ISR)
REVALIDATE_SECRET=your-secret-key-here

# Optional: Preview Mode Secret
PREVIEW_SECRET=your-preview-secret-here
```

## Development Setup

For local development, use:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WORDPRESS_API_URL=http://localhost:8080/wp-json/wp/v2

# WordPress Configuration (Backend)
WORDPRESS_SITE_URL=http://localhost:8080
```

## Production Setup

For production deployment:

1. Set `NEXT_PUBLIC_SITE_URL` to your production domain
2. Set `NEXT_PUBLIC_WORDPRESS_API_URL` to your WordPress API endpoint
3. Generate secure random strings for `REVALIDATE_SECRET` and `PREVIEW_SECRET`

## Vercel Deployment

Add these environment variables in your Vercel project settings:
- Go to Project Settings → Environment Variables
- Add each variable with appropriate values for Production/Preview/Development

## Testing Configuration

To test if environment variables are loaded correctly:

```bash
npm run dev
```

Then check the browser console or terminal for any API connection errors.
