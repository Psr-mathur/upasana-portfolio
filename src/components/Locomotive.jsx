'use client';

import { useEffect } from 'react';

export function Locomotive({ children }) {
	useEffect(() => {
		async () => {
			const LocomotiveScroll = (await import('locomotive-scroll'))
				.default;
			const scroll = new LocomotiveScroll({
				el: document.querySelector('[data-scroll-container]'),
				smooth: true,
				// direction: 'horizontal',
				multiplier: 0.5,
				class: 'is-reveal',
				touchMultiplier: 2.5,
				smartphone: {
					smooth: true,
				},
				tablet: {
					smooth: true,
				},
			});
		};
	});
	return <>{children}</>;
}
