import type {
  AppRouterInstance,
  NavigateOptions,
  PrefetchOptions,
} from "next/dist/shared/lib/app-router-context.shared-runtime";

export function useRouter(): AppRouterInstance {
  function back(): void {}

  function forward(): void {}

  function refresh(): void {}

  function push(href: string, options?: NavigateOptions): void {
    const url = window.location.origin+href;
    history.pushState({}, "", url);
  }

  function replace(href: string, options?: NavigateOptions): void {}

  function prefetch(href: string, options?: PrefetchOptions): void {}

  return { back, forward, refresh, push, replace, prefetch };
}

export function usePathname(): string {
  return "/en";
}