def is_valid(s: str) -> bool:
    """
    [REQUIRED] Why stack? list edge cases; Big-O analysis.
    """
    pairs = {')':'(', ']':'[', '}':'{'}
    st = []
    for ch in s:
        if ch in "([{":
            st.append(ch)
        elif ch in pairs:
            if not st or st[-1] != pairs[ch]:
                return False
            st.pop()
        else:
            # any other char -> invalid per problem definition
            return False
    return len(st) == 0
