---
title: Exploring AI Agents as a Fullstack Engineer
description: Notes on how I'm starting to use AI agents to speed up everyday engineering work — from scaffolding to debugging — without handing over the parts that matter.
pubDate: 2026-08-10
tags: ['AI Agents', 'Productivity', 'Engineering']
---

As a fullstack engineer at GITS Indonesia, a big part of my day is glue work:
wiring a frontend to an API, shaping a database, integrating one system with
another. Lately I've been exploring how **AI agents** can take some of that load.

## What an agent actually does

An AI agent is more than a chatbot. It can plan a task, call tools (read files,
run commands, query an API), observe the result, and decide the next step. That
loop — *plan, act, observe* — is what makes it useful for real engineering work
instead of just answering questions.

## Where it helps me today

- **Scaffolding** — generating boilerplate for a new module or endpoint so I can
  focus on the logic that's actually unique.
- **Debugging** — pasting a stack trace and having the agent trace it back across
  frontend and backend.
- **Refactors** — applying a repetitive change across many files consistently.

## Where I keep a hand on the wheel

Agents are fast, not infallible. I still:

1. Review every change before it lands.
2. Keep architecture and data decisions with me, not the model.
3. Write the tests that prove the behavior is right.

> The goal isn't to replace judgment — it's to remove the busywork that gets in
> the way of it.

## What's next

I'm experimenting with wiring agents into my own workflows: turning a task
description into a draft implementation, then reviewing and hardening it. The
part I find most exciting is that this is still early — the tooling is improving
every month, and knowing both the fullstack and the agent side puts you in a
good spot to build genuinely useful things.
