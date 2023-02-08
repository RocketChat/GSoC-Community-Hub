FROM gitpod/workspace-full:latest

# Install custom tools, runtime, etc.
RUN pnpm install turbo --global