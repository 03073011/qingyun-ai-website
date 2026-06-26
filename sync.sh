#!/bin/bash
while true; do
  git fetch origin 2>/dev/null
  LOCAL=$(git rev-parse HEAD)
  REMOTE=$(git rev-parse origin/master)
  if [ "$LOCAL" != "$REMOTE" ]; then
    echo "[$(date '+%H:%M:%S')] 检测到更新，正在同步..."
    git pull origin master
    echo "同步完成"
  fi
  sleep 30
done
