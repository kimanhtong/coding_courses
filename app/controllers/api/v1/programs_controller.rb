class Api::V1::ProgramsController < ApplicationController
  before_action :set_program, only: %i[ show update destroy ]

  # GET /programs
  def index
    @programs = Program.all
    render json: @programs
  end

  # GET /programs/1
  def show
    render json: @program
  end

  # POST /programs
  def create
    @program = Program.new(program_params)
    if @program.save
      @programs = Program.all
      render json: @program
    else
      render json: @program.errors, status: :unprocessable_entity
    end
  end

  def update
    puts program_params
    require 'json'
    image = @program.img_url
    puts image.class
    if @program.update(program_params)
      if @program.id > 5
        require 'cloudinary'
        Cloudinary::Uploader.destroy(image["key"])
      end
      render json: @program
    else
      render json: @program.errors, status: :unprocessable_entity
    end
  end

  # DELETE /programs/1
  def destroy
    require 'json'
    image = @program.img_url
    temp_pro = @program

    @program.destroy
    if temp_pro.id > 5
      require 'cloudinary'
      Cloudinary::Uploader.destroy(image["key"])
    end

    @programs = Program.all
    render body: nil, status: :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_program
      @program = Program.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def program_params
      params.require(:program).permit(:id, :name, :description, :duration_days, :created_at, :updated_at, img_url: [:key, :url])
    end
end
