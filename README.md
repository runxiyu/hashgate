# HashGate

HashGate selectively allows JavaScript based on SHA-256 hashes specifiable by
the user.

## Bugs

* Currently does not block inline scripts.

## Contribute

Create a branch that begins with `contrib/` and push to
[the repo on our home forge](https://forge.lindenii.runxiyu.org/hashgate/:/repos/hashgate/)
via SSH.

```
git clone ssh://forge.lindenii.runxiyu.org/hashgate/:/repos/hashgate/
cd hashgate
git checkout -b contrib/whatever
# edit and commit stuff
git push -u origin HEAD
```

Pushes that update branches in other namespaces, or pushes to existing
contribution branches belonging to other SSH keys, will be automatically
rejected. Otherwise, a merge request is automatically opened, and the
maintainers are notified via IRC.

## Support

[`#chat`](https://webirc.runxiyu.org/kiwiirc/#chat)
on
[irc.runxiyu.org](https://irc.runxiyu.org/).

## License

We use a FreeBSD-style license. See the `LICENSE` file for details.
