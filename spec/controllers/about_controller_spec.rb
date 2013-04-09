require 'spec_helper'

describe AboutController do

  describe "GET 'newslist'" do
    it "returns http success" do
      get 'newslist'
      response.should be_success
    end
  end

end
