# Complex Python program with guaranteed output

from functools import lru_cache

# ---------- Recursive + Memoization ----------
@lru_cache(None)
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)


# ---------- Generator ----------
def number_pipeline(limit):
    for i in range(1, limit + 1):
        yield i, factorial(i % 6)


# ---------- Class with logic ----------
class Processor:
    def __init__(self):
        self.total = 0
        self.even = []
        self.odd = []

    def process(self, data):
        for number, value in data:
            self.total += value
            if number % 2 == 0:
                self.even.append(value)
            else:
                self.odd.append(value)

    def summary(self):
        return {
            "total_sum": self.total,
            "even_count": len(self.even),
            "odd_count": len(self.odd),
            "max_even": max(self.even),
            "max_odd": max(self.odd),
        }


# ---------- Main execution ----------
def main():
    pipeline = number_pipeline(10)
    processor = Processor()

    processor.process(pipeline)
    result = processor.summary()

    print("=== PROGRAM OUTPUT ===")
    for key, value in result.items():
        print(f"{key} -> {value}")


if __name__ == "__main__":
    main()