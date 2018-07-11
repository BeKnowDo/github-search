export const urlGenerator = params => {
  return Object.keys(params)
    .map(key => {
      if (params[key] !== "") {
        if (key === "q") {
          return `${key}=${params[key]}`;
        } else if (key === "page" || key === "per_page") {
          return `&${key}=${params[key]}`;
        } else {
          return `${key}:${params[key]}`;
        }
      }
    })
    .join(" ");
};
