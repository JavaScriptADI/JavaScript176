const reviews = [
    {
        "rating": 2,
        "comment": "Very unhappy with my purchase!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "John Doe",
        "reviewerEmail": "john.doe@x.dummyjson.com",
        "hasPurchased": true,
    },
    {
        "rating": 2,
        "comment": "Not as described!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Nolan Gonzalez",
        "reviewerEmail": "nolan.gonzalez@x.dummyjson.com",
        "hasPurchased": true,
    },
    {
        "rating": 5,
        "comment": "Very satisfied!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Scarlett Wright",
        "reviewerEmail": "scarlett.wright@x.dummyjson.com",
        "hasPurchased": false,
    }
];

console.log(
    reviews.filter(review => review.hasPurchased)
);

