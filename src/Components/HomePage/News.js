import './newsStyle.css'

const News = () => {
  return (
    <div>
      <h2>NEWS</h2>
      <div class="row">
        <div class="col-xs-6 news margin-bottom-xs-16">
          <a href="">
            <img src="./dummy_picture.png" alt></img>
          </a>
          <p class="font-size-lg bold">
            <a href="">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </a>
          </p>
        </div>
        
        <div class="col-xs-6 news margin-bottom-xs-16">
          <a href="">
            <img src="./dummy_picture.png" alt></img>
          </a>
          <p class="font-size-lg bold">
            <a href="">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </a>
          </p>
        </div>
      </div>
      <div class="col-xs-6 news margin-bottom-xs-16">
          <a href="">
            <img src="./dummy_picture.png" alt></img>
          </a>
          <p class="font-size-lg bold">
            <a href="">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </a>
          </p>
        </div>

    </div>
  );
};
export default News;
