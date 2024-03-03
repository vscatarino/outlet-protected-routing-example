function CreateUser() {
    return (
        <div className="App">
            <h1>Create User</h1>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter user's name" />
                <br />
                <br />

                <label for="age">Age:</label>
                <input type="number" id="age" name="age" placeholder="Enter user's age" />
                <br />
                <br />

                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default CreateUser