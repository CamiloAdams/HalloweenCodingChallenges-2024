function createMagicPotion(potions, target) {
	let bestCombination = undefined;

	for (let i = 0; i < potions.length; i++) {
		const complement = target - potions[i];

		if (potions.includes(complement)) {
			if (complement === potions[i]) continue;

			const currentCombination = [i, potions.indexOf(complement)];

			if (
				!bestCombination ||
				(currentCombination[1] < bestCombination[1] &&
					currentCombination[0] < currentCombination[1])
			) {
				bestCombination = currentCombination;
			}
		}
	}

	return bestCombination;
}

const potions = [1, 2, 3, 4];
const goal = 5;

console.log(createMagicPotion(potions, goal)); // [4, 6] or [6, 2]
