// создание одноименного аналога библиотеки

// принимает: главный класс (например, app),
// mods - объект с модами: ключ - название класса,
// а значение булевый флаг, т.е. true => класс добавляем
// additional - массив доп классов

// возвращает строку классов

type Mods = Record<string, boolean | string>;

export function classNames(
	cls: string,
	mods?: Mods,
	additional?: string[],
): string {
	return [
		cls,
		...additional.filter(Boolean),
		Object.entries(mods)
			.filter(([cls, value]) => Boolean(value))
			.map(([cls, value]) => cls),
	].join(' ');
}

// EXAMPLE
// classNames("remove-btn", { hovered: true, selectable: true, red: false }, ['pdg']);
// при вызове должны получить:
// 'remove-btn hovered selectable red pdg'
