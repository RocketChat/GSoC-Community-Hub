FROM gitpod/workspace-full:latest

# Install custom tools, runtime, etc.
RUN sudo pnpm install turbo --global