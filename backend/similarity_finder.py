import spacy


nlp = spacy.load("en_core_web_lg")


def calculate_similarity(sentence1, sentence2):
    doc1 = nlp(sentence1)
    doc2 = nlp(sentence2)
    similarity_score = doc1.similarity(doc2)
    return similarity_score


def main():
    sentence1 = open('input.txt', 'r', encoding='utf-8').read()
    sentence2 = open('result.txt', 'r', encoding='utf-8')

    count = 0
    similarity_score_list = []

    for line in sentence2:
        # Only data that are taken from the snippets are taken into consideration
        if line.count('Snippet'):
            count += 1
            found = line
            similarity_score = calculate_similarity(sentence1, found)
            similarity_score_list.append(similarity_score)

            # Printing the similarity score
            print("-------------------------------------------------------------------")
            print(sentence1)
            print(found)
            print(f"[Case {count}]: Similarity between the two sentences:", similarity_score)
            print("-------------------------------------------------------------------\n\n")


    # Additional Data
    print("Average Similarity between the two sentences: ", sum(similarity_score_list) / len(similarity_score_list))
    print("Max Similarity between the two sentences: ", max(similarity_score_list))


if __name__ == "__main__":
    main()
