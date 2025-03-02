export type CategoryFilter = {
	name: '전체' | '한식' | '양식' | '중식' | '일식' | '분식' | '기타' | '간편식'
	value: 'all' | 'korean' | 'western' | 'chinese' | 'japanese' | 'snack' | 'etc' | 'simple'
	emoji: '' | '🍚' | '🍔' | '🥢' | '🍣' | '🍢' | '🍛' | '🥗'
}

export type ResultInfo = {
	seq: number
	category: CategoryFilter['value']
	name: string
	subname?: string
	address: string
	link: string
}
