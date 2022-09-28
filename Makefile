.DEFAULT_GOAL := help

install-npm: ## Install via NPM
	npm ci || npm install

install-yarn: ## Install via YARN
	yarn install --frozen-lockfile || yarn install

pretty: ## Run prettier
	npx prettier --write src

lint: ## Run ESLint --fix
	npx eslint --fix "src/**"

pre-commit: pretty lint ## Pre-commit for Husky

build-prod: pretty lint ## Build minimized
	npx tsc && vite build

build-dev: pretty lint ## Build not minimized
	npx vite build --mode development

preview: ## Show current help message
	npx vite preview

start: ## Run webserver
	npx vite --host 0.0.0.0 --port 4000

preview: ## Run webserver from dist folder
	npx vite preview

help: ## Show current help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' ./Makefile | sort | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}'
