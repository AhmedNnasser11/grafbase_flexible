/** @format */

import { g, config, auth } from "@grafbase/sdk";

const User = g.model("user", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatar: g.url(),
  description: g.string().optional(),
  gitHubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
});

const Project = g.model('Projects', {
  title: g.string().length({min: 3 }),
  description: g.string().optional(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User)
})

export default config({
  schema: g,
});
