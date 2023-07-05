declare const ym: unknown;
declare global {
	interface Window {
		ym_id?: number;
	}
  }

export function TrackPage(page: string) {
	if (typeof ym == 'function' && window.ym_id) {
		ym(window.ym_id, 'hit', page)
	}
}

export function TrackEvent(event: string, params?: Record<string, string>) {
	if (typeof ym == 'function' && window.ym_id) {
		ym(window.ym_id, 'reachGoal', event, params)
	}
}