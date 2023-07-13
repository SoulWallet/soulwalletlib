#!/bin/sh
if [ ! -d /root/.ethereum/keystore ]; then
    echo "/root/.ethereum/keystore not found, running 'geth init'..."
    cat /opt/genesis.json
    geth init /opt/genesis.json
    echo "...done!"
fi

echo "params: $@"

geth "$@"