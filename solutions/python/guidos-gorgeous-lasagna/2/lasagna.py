EXPECTED_BAKE_TIME = 40
PREP_TIME = 2

def bake_time_remaining(elapsed_time):
    """ Calculates remaining bake time """
    return EXPECTED_BAKE_TIME - elapsed_time

def preparation_time_in_minutes(number_of_layers):
    """ Calculates additional time needed based on layers """
    return PREP_TIME * number_of_layers

def elapsed_time_in_minutes(layers, elapsed_time):
    """ Recursively calculate total time """
    return preparation_time_in_minutes(layers) + elapsed_time
