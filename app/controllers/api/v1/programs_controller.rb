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

  # PATCH/PUT /programs/1
  def update
    if @program.update(program_params)
      @programs = Program.all
      render json: @program
    else
      render json: @program.errors, status: :unprocessable_entity
    end
  end

  # DELETE /programs/1
  def destroy
    @program.destroy
    @programs = Program.all
    render json: @programs
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_program
      @program = Program.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def program_params
      params.require(:program).permit(:id, :name, :description, :duration_days, :created_at, :updated_at)
    end
end
