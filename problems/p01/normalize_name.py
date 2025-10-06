def normalize_name(s: str) -> str:
    """
    [REQUIRED] 5–10 lines: how you understand the problem & approach,
    edge cases, and Big-O for time/memory.
    """
    # 1) Split tokens (ignore empties caused by extra spaces)
    # 2) Title-case each token (first letter upper, rest lower)
    # 3) Join with a single space
    parts = [p for p in s.strip().split() if p]
    parts = [p[:1].upper() + p[1:].lower() for p in parts]
    return " ".join(parts)
