'use client';

import { useSearchParams } from 'next/navigation';

export function useCustomSearchParams() {
	const params = useSearchParams();
	console.log(params);
	return params;
}
