abstract class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string
    ){

    }
}

// const Jayant = new TakePhoto("test", "test");

class Insta extends TakePhoto{

}

const Jayant = new Insta("test", "test");