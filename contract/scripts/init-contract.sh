#!/usr/bin/env bash

near call "$(<./neardev/dev-account)" new "$(node ./init-args.js)" --accountId "$1"