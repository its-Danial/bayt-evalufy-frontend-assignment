import { contains, hasUniqueCharacters } from "@/lib/assignmentTwoSolution";
import { testJSON } from "@/utils/helpers";
import { Badge, Card, Text, TextInput, Title } from "@tremor/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function AssignmentTwo() {
  // State for question one Assignment Two
  const [questionOneData, setQuestionOneData] = useState({
    inputString: "",
    badge: { text: "Please enter a string", color: "gray" },
  });
  // State for question two Assignment Two
  const [questionTwoData, setQuestionTwoData] = useState({
    inputNestedObject: "",
    inputSearchValue: "",
    badge: { text: "Please provide an input", color: "gray" },
  });

  // Function to update date for question one
  const updateQuestionOneData = (inputString: string, badgeText: string, badgeColor: string) => {
    setQuestionOneData({
      inputString,
      badge: { text: badgeText, color: badgeColor },
    });
  };
  // Function to update date for question two
  const updateQuestionTwoData = (
    inputNestedObject: string,
    inputSearchValue: string,
    badgeText: string,
    badgeColor: string
  ) => {
    setQuestionTwoData({
      inputNestedObject,
      inputSearchValue,
      badge: { text: badgeText, color: badgeColor },
    });
  };

  // handle input value changes for question one and display result
  const handleQuestionOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputString = event.target.value;

    if (inputString.length === 0) {
      updateQuestionOneData(inputString, "Please enter a string", "gray");
      return;
    }

    // calls the hasUniqueCharacters function from @/lib/assignmentTwoSolution
    const inputIsUnique = hasUniqueCharacters(inputString);

    // updates state based on the change
    updateQuestionOneData(
      inputString,
      inputIsUnique ? "String has unique characters" : "String does not have unique characters",
      inputIsUnique ? "green" : "red"
    );
  };

  //handle nested object Input
  const handleQuestionTwoObjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNestedObject = event.target.value;
    if (inputNestedObject.length === 0) {
      updateQuestionTwoData(inputNestedObject, questionTwoData.inputSearchValue, "Please enter a nested", "gray");
      return;
    }
    // updates state based on the change
    updateQuestionTwoData(inputNestedObject, questionTwoData.inputSearchValue, "Please enter a search value", "gray");

    // console.log(JSON.parse(inputNestedObject));
  };

  // handle search value input and calling the contains function from @/lib/assignmentTwoSolution
  const handleQuestionTwoSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputSearchValue = event.target.value;

    // first check if a search been inputted
    if (inputSearchValue.length === 0) {
      updateQuestionTwoData(questionTwoData.inputNestedObject, inputSearchValue, "Please enter a search value", "gray");
      return;
    }

    // test if the input is a valid JSON so it can be converted into a Javascript object for searching
    if (!testJSON(questionTwoData.inputNestedObject)) {
      updateQuestionTwoData(
        questionTwoData.inputNestedObject,
        inputSearchValue,
        "Please enter a valid JSON object first",
        "blue"
      );
      return;
    }

    // search the inputted value in the Object then update states based on the result
    if (questionTwoData.inputNestedObject.length !== 0) {
      const isValueInObject = contains(
        JSON.parse(questionTwoData.inputNestedObject),
        parseInt(inputSearchValue) ? parseInt(inputSearchValue) : inputSearchValue
      );
      console.log(JSON.parse(questionTwoData.inputNestedObject));

      updateQuestionTwoData(
        questionTwoData.inputNestedObject,
        inputSearchValue,
        isValueInObject ? "Value is present in the nested object" : "Value is not present in the nested object",
        isValueInObject ? "green" : "red"
      );
    }
  };

  return (
    <>
      <Head>
        <title>Assignment Two solution</title>
      </Head>
      <main className="px-12 py-12">
        <Title>Assignment Two solution</Title>
        {/* Question One */}
        <Card className="mt-6 mx-auto">
          <div>
            <h3 className="text-base font-normal">
              A. Question Write a function that determines if a given string has all unique characters.
            </h3>
            <div className="mt-6">
              <TextInput
                placeholder="Enter a string"
                onChange={handleQuestionOneChange}
                value={questionOneData.inputString}
              />
              <div className="mt-6">
                {/* @ts-ignore */}
                <Badge className="w-full h-10" color={questionOneData.badge.color}>
                  {questionOneData.badge.text}
                </Badge>
              </div>
            </div>
          </div>
        </Card>
        {/* Question Two */}
        <Card className="mt-6">
          <div>
            <h3 className="text-base font-normal">
              B. Write a function called contains that searches for a value in a nested object. It returns true if the
              object contains that value.
            </h3>
            <Text className="mt-1">
              <strong>Note:</strong> Enter a JSON object, it will then be parsed into a Javascript object using{" "}
              <i>JSON.parse(inputNestedObject)</i>
            </Text>
            <Text className="mt-1">
              You can covert Javascript objects to JSON for test through{" "}
              <Link
                className="text-blue-400 hover:text-blue-600"
                href="https://www.convertsimple.com/convert-javascript-to-json/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.convertsimple.com
              </Link>
            </Text>
            <div className="mt-6 flex gap-4">
              <TextInput
                className="flex-1"
                placeholder="Enter a nested JSON object"
                onChange={handleQuestionTwoObjectChange}
                value={questionTwoData.inputNestedObject}
                multiple
              />
              <div className="flex-1">
                <TextInput
                  multiple
                  placeholder="Enter a search value"
                  onChange={handleQuestionTwoSearchChange}
                  value={questionTwoData.inputSearchValue}
                />
                {/* @ts-ignore */}
                <Badge className="w-full h-10 mt-4" color={questionTwoData.badge.color}>
                  {questionTwoData.badge.text}
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
}
