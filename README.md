# Portfolio: Jekyll + Decap CMS on GitHub Pages
Setup: repo `USERNAME.github.io` -> Pages (deploy from `main`) -> GitHub OAuth App -> Cloudflare Worker OAuth proxy (holds the client secret) -> set `base_url` in `admin/config.yml` -> log in at `/admin`.
Local preview: `bundle install && bundle exec jekyll serve`, and `npx decap-server` in a second terminal, then open http://localhost:4000/admin/
