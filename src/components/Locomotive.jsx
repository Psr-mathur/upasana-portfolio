'use client';

import { useEffect } from 'react';

export function Locomotive({ children }) {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll'))
				.default;
			const scroll = new LocomotiveScroll({
				lenisOptions: {
					smoothTouch: true,
					syncTouch: true,
					touchMultiplier: 2,
				},
			});
		})();
	});
	return <>{children}</>;
}
