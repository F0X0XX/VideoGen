# Coordinates of points
A = (1/3, 0)
B = (0, 1/5)
O = (0, 0)

# Base (distance from O to A) and Height (distance from O to B)
base = A[0] - O[0]
height = B[1] - O[1]

# Area of triangle
area = 0.5 * base * height
print(area)