'use client';

import { useEffect } from 'react';

export function Locomotive({ children }) {
	// useEffect(() => {
	// 	(async () => {
	// 		const LocomotiveScroll = (await import('locomotive-scroll'))
	// 			.default;
	// 		const scroll = new LocomotiveScroll();
	// 	})();
	// });
	return <>{children}</>;
}
