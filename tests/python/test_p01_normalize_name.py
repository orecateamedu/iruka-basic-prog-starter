from problems.p01.normalize_name import normalize_name

def test_trim_and_title():
    assert normalize_name("   nGuYeN   vaN    BiNH  ") == "Nguyen Van Binh"

def test_single_token():
    assert normalize_name("a") == "A"

def test_only_spaces():
    assert normalize_name("   ") == ""

def test_mixed_case():
    assert normalize_name("trAn  quang    HAI") == "Tran Quang Hai"
