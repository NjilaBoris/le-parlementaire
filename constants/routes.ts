const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  CREATE_ARTICLE: "/create-article",
  PARLIAMENT: "/parliament",
  ELECTIONS: "/elections",
  POLITICS: "/politics",
  LOCAL_GOVERNANCE: "/local-governance",
  ECONOMY_AND_SOCIETY: "/economy-society",
  YOUTH_SPOTLIGHT: "/youth-spotlight",
  OPINIONS: "/opinions",
  PROFILE: (id: string) => `/profile/${id}`,
  ARTICLE: (id: string) => `/articles/${id}`,
  SIGN_IN_WITH_OAUTH: `signin-with-oauth`,
};

export default ROUTES;
