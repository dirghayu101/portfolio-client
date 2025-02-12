# Fixing security vulnerabilities found through npm audit:
- The current version that I have forked has more than 10 severe security vulnerabilities which I want to remove.
- Upon running `npm install`, I got to know about those vulnerabilities and I used `npm audit` to get more details.
- I then tried to fix these vulnerabilities using `npm audit fix`, which removed some of them, followed by `npm audit fix --force`, but there was still one severe vulnerability.
- Since I wanna understand this project and do things mostly from scratch, I upgraded all the packages to their latest version. Disclaimer: the code is broken now.
    - How did I do it though? `npm install -g npm-check-updates`, this installs a package which automatically updates your package.json with latest version by using `ncu -u` and then simply run `npm install`.

# Fixing next.config.js:
- There were some now invalid options, which I removed.
- Good references: [1], [2]
- This reference has type declaration for config option, not really useful now, but might be handy later: [3]


# References:
[1]: https://nextjs.org/docs/13/app/api-reference/next-config-js/images
[2]: https://www.dhiwise.com/post/essential-nextjs-config-settings-for-modern-web-development
[3]: https://cdn.jsdelivr.net/npm/next/dist/server/config-shared.d.ts