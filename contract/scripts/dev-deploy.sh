#!/usr/bin/env bash

WASM_PATH="$(find ./target/wasm32-unknown-unknown/release/ -maxdepth 1 -name "*.wasm")"
near dev-deploy --wasmFile "$WASM_PATH" "$@"