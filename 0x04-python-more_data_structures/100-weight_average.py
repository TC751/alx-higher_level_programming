#!/usr/bin/python3
def weight_average(my_list=[]):
    if not my_list:
        return 0

    num = 0
    dens = 0

    for tup in my_list:
        num += tup[0] * tup[1]
        dens += tup[1]

    return (num / dens)
	

