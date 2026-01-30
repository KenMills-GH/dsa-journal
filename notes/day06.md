# Day 06 — Hash Maps & Sets

## Problems

- [x] Problem 1: Contains Duplicate (Sets)
- [x] Problem 2: Two Sum (Index Map)
- [x] Problem 3: First Unique Character (Frequency Map)
- [x] Problem 4: Ransom Note (Supply vs. Demand Logic)
- [x] Problem 5: Intersection of Two Arrays (Existence Check)
- [x] Problem 6: Isomorphic Strings & Word Pattern (Bi-directional Mapping)

## Key pattern(s)

- **Frequency Counter**: Using `map.get(key) || 0` to build an inventory of counts.
- **Existence Check**: Using Set or `map.has()` for instant O(1) lookups.
- **Bi-directional Mapping**: Using two separate maps (A→B and B→A) to enforce a strict 1-to-1 structural relationship.

## Mistakes / got stuck on

- **Syntax Mix-Ups**: Confusing `.get()` (retrieves value) with `.has()` (returns true/false), or using non-existent methods like `.seen()`.
- **The "Undefined" Trap**: Writing `if (map.get(x) !== y)` without checking if x exists first. (Undefined !== y is true, causing false positives).
- **Overwrite Concept**: Forgetting that `map.set()` completely replaces the previous value (no history kept).

## Takeaways (2)

1. **Always Handle "New"**: When retrieving from a map, always plan for the key being missing (e.g., use `|| 0` for numbers).
2. **Maps are Dictionaries, not Lists**: You generally need to loop through the data (array/string) and look up in the map, not the other way around.

## What to review tomorrow

- **Syntax Drills**: Quick-fire practice of `.get`, `.set`, `.has`, and `.add` until muscle memory takes over.
