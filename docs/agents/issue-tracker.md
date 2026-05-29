# Issue tracker: Gitea

Issues and PRDs for this repo live as Gitea issues at `https://gitea.lan/gensir/Crypt-Contracts`. Use the `tea` CLI for all operations.

## Login

Login is configured as `gitea-lan` (user: `gensir`). Always pass `--login gitea-lan` if needed.

## Conventions

- **Create an issue**: `tea issue create --title "..." --body "..." --repo gensir/Crypt-Contracts`
- **Read an issue**: `tea issue view <number> --repo gensir/Crypt-Contracts`
- **List issues**: `tea issue list --repo gensir/Crypt-Contracts --state open`
- **Comment on an issue**: `tea issue comment <number> --body "..." --repo gensir/Crypt-Contracts`
- **Apply labels**: `tea issue edit <number> --add-label "..." --repo gensir/Crypt-Contracts`
- **Remove labels**: `tea issue edit <number> --remove-label "..." --repo gensir/Crypt-Contracts`
- **Close**: `tea issue close <number> --repo gensir/Crypt-Contracts`

## When a skill says "publish to the issue tracker"

Create a Gitea issue using `tea issue create`.

## When a skill says "fetch the relevant ticket"

Run `tea issue view <number> --repo gensir/Crypt-Contracts`.
