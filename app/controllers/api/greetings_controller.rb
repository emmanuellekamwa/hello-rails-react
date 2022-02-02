module Api
  class Api::GreetingsController < ApplicationController
    def index
      @greetings = Greeting.all
      render json: @greetings
    end

    def show
      @greeting = Greeting.find(params[:id])
      render json: @salute
    end
  end
end