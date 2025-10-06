from problems.p02.valid_parentheses import is_valid

def test_basic_true():
    assert is_valid("()") is True

def test_true_mix():
    assert is_valid("()[{}]") is True

def test_false_wrong_pair():
    assert is_valid("(]") is False

def test_false_cross():
    assert is_valid("([)]") is False

def test_deep_nest():
    assert is_valid("(((())))") is True
