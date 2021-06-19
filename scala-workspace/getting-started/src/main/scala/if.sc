val number = 100

val symbol: String = if (number > 10) "> 10" else "<= 10"

val amounts = Array(10,24,35,23,12)
var sum = 0
for (amount <- amounts) {
  sum += amount
}

val result: Array[Int] = for(amount <- amounts) yield {
  amount
}

val anArray = Array(100, 200, 300)
anArray match {
  case Array(_, _, c) => println("c =" + c)
}

val aTuple = ("NZD", 100)
