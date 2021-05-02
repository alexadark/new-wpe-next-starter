# Wbs-WPHeadless - WPHeadless Nextjs Starter (by Webstantly)

This is an **alpha** version of the boilerplate

## Getting started

- Clone the repository into your local machine
- Copy the file `.env-EXAMPLE`
- Rename the file into `.env.local` and add there the proper info

```
NEXT_PUBLIC_WORDPRESS_URL=HERE_YOUR_WORDPRES_PUBLIC_URL
```

- Install & Start as dev

```
yarn install
yarn run dev
```

## Introduction

We are using the alpha version (but amazing) of the [headless starter](https://github.com/wpengine/headless-framework) done by WPEngine.

Things that we want to have covered:

- GetStaticProps
- Get "Global" data
- Auth
- Previews
- Design based on tailwind and macro

Starter code for Webstantly NextJS derived applications.

### GetStaticProps

Go to `localhost:3000` to see some examples and check the `/examples`/ directory to check information.

- Some looms:

- [usePost && getNextStaticProps](https://www.loom.com/share/dc720e6d4dd14ef38a011b7a995ad56a)

### Auth

- We will be using `wp-graphql-auth`:
- Install the plugin in wordpress
- Add the tokens

```
** File Changes **
-- .htaccess --

SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1

RewriteEngine on
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]

-- wp-config.php --

define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'super-secret-key' );

define('JWT_AUTH_CORS_ENABLE', true);
```

- Allow user's registrations in WP:
  `general/settings/`
- Add npm package

https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/

-- To change Reset Email and New user email please go to this [Kellen Mace repo](https://github.com/kellenmace/run-through-history-backend) to learn how to do it.

- I am creating a basic plugin for this also
