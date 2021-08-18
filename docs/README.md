# Set up

- Clone project git@ssh.dev.azure.com:v3/nine7soft/Kowaha/Bac
- Go to the project folder: cd Bac
- Create .env file: cp .env_dist .env
- Build container: docker-compose build
- Start container: docker-compose up -d
- Be patient until the npm install command is completed, might take a couple of minutes.

# Folder structure
src/
    app/
        config/
    lib/
        libX/
    modules/
        moduleX/
            state/
               reducers/
               sagas/ 
            types/
            ui/
                ComponentX/
    tests/
        app/
        modules/
            moduleX/
                state/
                    reducers/
                    sagas/
                types/


# Naming convention
