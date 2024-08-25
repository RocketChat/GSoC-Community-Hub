import { withPayload } from '@payloadcms/next/withPayload'
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ENV_FILES = ['.env', '.env.local', `.env.${process.env.NODE_ENV || 'development'}`];

ENV_FILES.forEach((file) => {
  dotenv.config({
    path: path.join(__dirname, `../../${file}`),
  });
});

const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    reactCompiler: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['@palanikannan1437/rc4community-navbar-demo']
}

export default withPayload(nextConfig)
