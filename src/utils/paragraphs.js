


export const getRandomParagraph = () => {
    const paragraphs = [
        'We live in a 12-story building in the central part of the city. Let me tell you about our apartment.',
        'My family is a team! We are four in my family: my parents, my sister and me. We like to spend time together and play games. My father`s name is John. He has green eyes and brown hair. He is a football trainer and plays football every day with his pupils. Football is popular in England. My father is kind, strong and active. My mother Alice is a school teacher. She has blue eyes and blond hair. She likes children, that is why she is a school teacher. Her favourite subject is English. She likes to read books and walk with our dog. My mother is beautiful, calm and clever. Lisa is my little sister. She is four years old. She can read simple books and draw funny pictures. I like how she dances to music on the radio. She dreams about magic animals. On weekends we play active games in the park near our house. My father teaches us to play football, my mother tells stories from the books, and Lisa sings children`s songs and dances. I like to spend time with them, they love me, and I love them too! My family is the best!',
        'I like to be at home. It`s my happy place. It is a place where my family gets together. We live in a two-storey house. Our living room is on the ground floor. There we sit, watch movies and play games. My little sister likes to play with her dolls there. I often find her toys under the table. Next to the living room there is a kitchen and a dining room. We cook in the kitchen and eat in the dining room. Kitchen is my mother`s favourite place. She likes to cook soups and sandwiches. My father sometimes sits there in the armchair and reads books. Our room and parents` bedroom is on the first floor. There`s a bathroom next to our room. My sister and I have lots of toys in our room. There are many cars, dinosaurs and dolls. There is a computer on the table and a bookshelf in the corner. There are books about travelling and animals. There`s our parents` bedroom opposite our room. Their room is large with big windows. There`s a big bed, a wardrobe, a mirror and a bookshelf. I like my home, it is a place to be happy and have fun!',
        'Morning is my favourite part of the day. I like to make my morning interesting. Interesting morning means a good d I wake up at 7 o`clock and get up. I do some exercises – I turn, jump and sometimes go jogging. Then, I go to the bathroom. I take a shower, brush my teeth and wash my face. I like this part of the morning because my toothpaste smells like oranges, and my soap smells like apples. I like oranges and apples. After that I get dressed – I put on my pants, a T-shirt and a sweater. These are my school clothes, but I sometimes wear a tracksuit to school. At 7:25 I go downstairs to the kitchen to have breakfast with my Mom and Dad. I usually have some oatmeal or a chicken sandwich. Sometimes I eat fried eggs with sausages and cheese. I like to drink tea in the morning. I also take my lunchbox to school. There is fruit, two sandwiches and a small bottle of juice. At 7:45 I say good-bye to my parents, take my school bag and go outside. There is a school bus waiting for me. It picks me up, and I go to school, ready for a long and interesting school day.',
        'It is popular in England to have pets. My friends have dogs, cats, parrots, hamsters and mice. I have pets too. There are two of them: a cat and a do My dog Lula is big and brave. She is black and has brown eyes. I like to play with her in the park. I throw sticks and she runs, catches them and brings back. Sometimes we play another game with frisbee. I throw it, run away and let Lula catch it. When we come home, me and my mother wash Lula and let it have a rest. Lula is funny and sometimes she takes our boots and hides them in different corners of our house. Chester is our big and lazy cat. He is 10 years old. Chester is white with brown spots on his tail, ears and nose. He is fluffy and soft. Chester is a serious cat, he doesn`t like to eat cat food. We prepare porridge with meat for him. My mother thinks our cat is a king, but I think Chester is just a very hungry cat. Chester is kind and when I feel bad, he comes and lies next to me. ',
        'Winter time is like a fairy tale! New Year and Christmas are my favourite holidays. It`s the time when all my family gather together. We put up a Christmas tree one week before Christmas. We hang some baubles, bells, shapes of snowflakes and tinsel. Me and my brother help to pack presents and cards. The day of New Year`s eve starts with some preparations. My mother and I cook special food. Every year we make some traditional dishes. They are usually winter salad, dumplings and a traditional chocolate pudding with sweet berries. At the same time, my brother and father prepare some wood for the fire and decorate walls and windows with lights. When everything at home is done, we go to visit our friends. We tell stories, play funny games and watch “Home Alone”. They always cook a lot of delicious food. My favorites are an orange pie, apple ice cream, chocolate cakes, fried chicken and baked fish. In the evening we return home and wait for our guests. My grandparents, aunts and uncles, cousins and nephews come to visit us. Me and my brother play with children and adults talk to our parents. We wait for the beginning of the New Year, say good words to each other. When the clock strikes 12 we make wishes, hug each other and give presents. New Year is a great holiday! It`s full of joy, love and happiness.',
        'In my family we usually go shopping on Sundays. We wake up at 9 o`clock, have breakfast and go to the shopping mall in the city center. First, we buy some food in a big supermarket. There are lots of departments and sections: fruit and vegetables, bakery, diary, meat and fish, and of course sweets. My parents buy all products for a week to cook and eat at home. We always buy something tasty for tea. I take chocolate candies, my brother takes bananas, and my parents get cakes with berries. After the supermarket we go to buy some clothes. My dad buys a few T-shirts and trousers. My brother likes shirts with cars and I like shirts with animals. In summer, we buy swimming shorts and hats. In winter we buy hats, scarfs and sweaters. My mother gets some dresses, skirts and blouses. My father likes to visit a sports shop. There he buys balls, bicycles, tracksuits or socks. After the shopping is done we all have lunch in a food court. Then we play some games in the entertainment zone. It`s so much fun!',
    ]
    const item = paragraphs[Math.floor(Math.random()*paragraphs.length)]
    return [item.split(''), item]
}


export const getCodeText = () => {
    const codes = [
        'export const getRandomParagraph const item = paragraphs[Math.floor(Math.random()*paragraphs.length)] return [item.split(""), item]',
        'position: absolute; width: 15%; height: 100%; top: 0; right: 0; background-color: #0a1224; opacity: 0.8; transform: skew(-35deg) translateX(50px); filter: blur(10px); display: none; justify-content: center; align-items: center; z-index: 50;'
    ]
    const item = codes[Math.floor(Math.random()*codes.length)]

    return [item.split(''), item]
}