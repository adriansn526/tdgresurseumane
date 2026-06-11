# WordPress Headless CMS Setup Guide

## 1. WordPress Installation

Install WordPress on your server or use a hosting provider that supports WordPress.

Recommended hosting:
- **VPS**: DigitalOcean, Linode, Vultr
- **Managed WordPress**: Kinsta, WP Engine
- **Shared Hosting**: SiteGround, Bluehost

## 2. Required Plugins

Install and activate the following plugins:

### Essential Plugins:
1. **RankMath SEO** (Free/Pro)
   - Best SEO plugin for WordPress
   - Structured data support
   - XML sitemap generation
   - Social media integration

2. **Advanced Custom Fields (ACF) Pro**
   - Custom field management
   - Flexible content builder
   - Required for service fields

3. **WP REST API Controller** (Optional)
   - Better REST API control
   - Custom endpoint management

### Recommended Plugins:
- **Classic Editor** - If you prefer the classic WordPress editor
- **Yoast Duplicate Post** - For duplicating posts/services
- **WP Migrate DB** - For database migrations

## 3. Custom Post Type: Services

Add this code to your theme's `functions.php` or create a custom plugin:

```php
<?php
/**
 * Register Custom Post Type: Services
 */
function tdg_register_services_cpt() {
    $labels = array(
        'name'                  => _x('Servicii', 'Post Type General Name', 'tdg'),
        'singular_name'         => _x('Serviciu', 'Post Type Singular Name', 'tdg'),
        'menu_name'             => __('Servicii', 'tdg'),
        'name_admin_bar'        => __('Serviciu', 'tdg'),
        'archives'              => __('Arhivă Servicii', 'tdg'),
        'attributes'            => __('Atribute Serviciu', 'tdg'),
        'parent_item_colon'     => __('Serviciu Părinte:', 'tdg'),
        'all_items'             => __('Toate Serviciile', 'tdg'),
        'add_new_item'          => __('Adaugă Serviciu Nou', 'tdg'),
        'add_new'               => __('Adaugă Nou', 'tdg'),
        'new_item'              => __('Serviciu Nou', 'tdg'),
        'edit_item'             => __('Editează Serviciu', 'tdg'),
        'update_item'           => __('Actualizează Serviciu', 'tdg'),
        'view_item'             => __('Vezi Serviciu', 'tdg'),
        'view_items'            => __('Vezi Servicii', 'tdg'),
        'search_items'          => __('Caută Serviciu', 'tdg'),
    );

    $args = array(
        'label'                 => __('Serviciu', 'tdg'),
        'description'           => __('Servicii oferite de TDG Trading', 'tdg'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'excerpt', 'thumbnail', 'revisions'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-portfolio',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true, // Important for REST API
        'rest_base'             => 'services',
    );

    register_post_type('services', $args);
}
add_action('init', 'tdg_register_services_cpt', 0);
```

## 4. ACF Field Groups for Services

Create a new Field Group in ACF with the following fields:

### Field Group: Service Details
**Location Rule:** Post Type is equal to Services

#### Fields:

1. **Service Icon** (Text)
   - Field Name: `service_icon`
   - Field Type: Text
   - Instructions: Enter emoji or icon name (e.g., 👥, 📈)

2. **Service Subtitle** (Text)
   - Field Name: `service_subtitle`
   - Field Type: Text
   - Instructions: Short subtitle for the service

3. **Service Features** (Repeater)
   - Field Name: `service_features`
   - Field Type: Repeater
   - Sub Fields:
     - `feature_title` (Text)
     - `feature_description` (Textarea)
     - `feature_icon` (Text)

4. **Service Process** (Repeater)
   - Field Name: `service_process`
   - Field Type: Repeater
   - Sub Fields:
     - `step_number` (Number)
     - `step_title` (Text)
     - `step_description` (Textarea)

5. **Service Benefits** (WYSIWYG Editor)
   - Field Name: `service_benefits`
   - Field Type: WYSIWYG Editor

6. **Service FAQ** (Repeater)
   - Field Name: `service_faq`
   - Field Type: Repeater
   - Sub Fields:
     - `question` (Text)
     - `answer` (Textarea)

7. **Service CTA Text** (Text)
   - Field Name: `service_cta_text`
   - Field Type: Text
   - Default Value: "Solicită Consultanță"

8. **Service CTA Link** (Link)
   - Field Name: `service_cta_link`
   - Field Type: Link

## 5. RankMath SEO Configuration

### General Settings:
1. Go to **Rank Math → General Settings**
2. Enable **REST API** support
3. Configure **Sitemap** settings

### Schema Configuration:
1. Go to **Rank Math → Schema**
2. Add **Organization** schema:
   - Name: TDG Trading
   - Logo: Upload company logo
   - Contact Info: Add phone, email, address

### Service Pages Schema:
For each service page, configure:
- Schema Type: **Service**
- Service Name: Auto-fill from title
- Provider: TDG Trading
- Area Served: Romania

## 6. Permalinks Configuration

1. Go to **Settings → Permalinks**
2. Select **Post name** structure
3. Save changes

## 7. REST API Testing

Test your WordPress REST API:

```bash
# Get all services
curl https://cms.tdgtrading.ro/wp-json/wp/v2/services

# Get service by slug
curl https://cms.tdgtrading.ro/wp-json/wp/v2/services?slug=administrare-personal
```

## 8. CORS Configuration (if needed)

If you encounter CORS issues, add this to your `wp-config.php`:

```php
// Enable CORS for Next.js frontend
header('Access-Control-Allow-Origin: https://tdgtrading.ro');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
```

Or use the **WP CORS** plugin for easier management.

## 9. Sample Service Data

Create your first service with this structure:

**Title:** Administrare Personal

**Content:**
```
Oferim servicii complete de administrare a personalului, incluzând:
- Salarizare completă
- Raportări REVISAL
- Contracte de muncă
- State de plată
```

**ACF Fields:**
- Service Icon: 👥
- Service Subtitle: Salarizare și raportări REVISAL complete
- Service Features: (Add 3-5 features)
- Service Process: (Add 4-6 steps)
- Service FAQ: (Add 5-8 questions)

## 10. Security Best Practices

1. **Hide WordPress version**
2. **Use strong passwords**
3. **Install security plugin** (Wordfence, Sucuri)
4. **Enable SSL certificate**
5. **Regular backups** (UpdraftPlus, BackupBuddy)
6. **Limit login attempts**
7. **Keep WordPress and plugins updated**

## 11. Performance Optimization

1. **Install caching plugin** (WP Rocket, W3 Total Cache)
2. **Optimize images** (ShortPixel, Imagify)
3. **Use CDN** (Cloudflare, BunnyCDN)
4. **Enable Gzip compression**
5. **Minify CSS/JS**

## 12. Webhook for ISR (Optional)

To enable on-demand revalidation when content is updated:

```php
// Add to functions.php
function tdg_trigger_nextjs_revalidation($post_id) {
    $post = get_post($post_id);
    
    if ($post->post_type !== 'services') {
        return;
    }
    
    $revalidate_url = 'https://tdgtrading.ro/api/revalidate';
    $secret = 'your-revalidate-secret';
    
    wp_remote_post($revalidate_url, array(
        'body' => json_encode(array(
            'secret' => $secret,
            'path' => '/servicii/' . $post->post_name
        )),
        'headers' => array('Content-Type' => 'application/json')
    ));
}
add_action('save_post', 'tdg_trigger_nextjs_revalidation');
```

## Support

For issues or questions:
- WordPress Codex: https://codex.wordpress.org/
- ACF Documentation: https://www.advancedcustomfields.com/resources/
- RankMath Support: https://rankmath.com/kb/

---

**Setup Complete!** Your WordPress headless CMS is now ready to serve content to your Next.js frontend.
