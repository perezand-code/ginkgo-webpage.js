type AnimeModule = Record<string, unknown>;

export async function runAnime(targets: string | Element | Element[], params: Record<string, unknown>) {
  const mod = (await import("animejs")) as AnimeModule;
  const animate = mod.animate as undefined | ((targets: unknown, params: Record<string, unknown>) => unknown);
  const defaultAnime = mod.default as undefined | ((params: Record<string, unknown>) => unknown);

  if (animate) {
    return animate(targets, params);
  }

  if (defaultAnime) {
    return defaultAnime({ targets, ...params });
  }

  return null;
}

export async function getAnimeModule() {
  return (await import("animejs")) as AnimeModule;
}
