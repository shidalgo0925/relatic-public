#!/bin/sh
# Ejecutar desde cualquier cwd: sh scripts/diagnose.sh
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
echo "=== relatic-public diagnose ==="
echo "pwd: $ROOT"
echo "node: $(node -v 2>&1 || echo 'node missing')"
echo "npm: $(npm -v 2>&1 || echo 'npm missing')"
test -f package.json && echo "package.json: ok" || { echo "package.json: MISSING"; exit 1; }
test -d node_modules && echo "node_modules: present" || echo "node_modules: MISSING (run npm ci)"
echo "--- npm run build ---"
npm run build
echo "--- ok ---"
