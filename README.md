# VidOnl

VidOnl is a complete online classes system with tutoring scripts that can be completely customized in markdown. Professors can create tutoring scripts in markdown and upload them and students can learn from them. This application is built on sveltekit (frontend) and strapi (backend). This repository is the frontend endpoint for the application. Checkout [this repo](https://github.com/yogesh174/vid-onl-api) for the backend. 

## Develop

```bash
# clone the repo
git clone https://github.com/yogesh174/vid-onl.git

# install packages
yarn install

# start the application
yarn run dev --host
```

> Note: To change the backend endpoint, navigate to [`/src/lib/api.js`](https://github.com/yogesh174/vid-onl/blob/066b96ed73b19ab25811e6feb39c8044670acf14/src/lib/api.js#L1) and modify the `base` variable. 

## Demo

[Live deployment](https://vid-onl.vercel.app/)

> Note: It is slow and sometimes doesn't load. Just refresh if it doesn't load or throws some error.

## Similar applications

Checkout other applications similar to this one
- [Library management system](https://github.com/yogesh174/lib-sys)
- [Hostel management system](https://github.com/yogesh174/htl-mgmt)
